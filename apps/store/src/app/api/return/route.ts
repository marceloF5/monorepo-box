import { NextResponse } from "next/server"

export const POST = async (request: Request) => {
  const body = await request.json()
  const bodyData = body.event

  console.log(`🟡 initiate api 🟡: ${JSON.stringify(body, null, 2)}`)
  console.log(`🟡 initiate api 🟡: ${JSON.stringify(bodyData, null, 2)}`)
  // const { event } = await request.json()
  // const bodyData = event.bodywh

  // logger.info(`🚀 ~ POST ~ request: ${bodyData}`)

  try {
    // await prisma.$transaction(async (tx) => {
    //   await tx.returnTransactionViaAfterShip.create({
    //     data: {
    //       rawResponse: JSON.stringify(event),
    //       order: {
    //         connect: {
    //           id: Number(bodyData.data.order.id),
    //         },
    //       },
    //     },
    //   })

    //   const returnItem = await tx.return.create({ data: {} })

    //   bodyData.data.return_items.forEach(async (item) => {
    //     await tx.returnLine.create({
    //       data: {
    //         quantity: item.return_quantity,
    //         returnTypes: 'NORMAL_RETURN',
    //         orderline: {
    //           connect: {
    //             id: Number(item.external_id),
    //           },
    //         },
    //         return: {
    //           connect: {
    //             id: returnItem.id,
    //           },
    //         },
    //       },
    //     })
    //     if (
    //       item.reason.description ===
    //       'Selling your item back to us? (BuyBack Schema)'
    //     ) {
    //       // await tx.buyBack.create({
    //       //   data: {
    //       //     purchasePrice: Number(item.purchasePrice.toFixed(2)),
    //       //     currentPrice: Number(buyBack.currentPrice.toFixed(2)),
    //       //     fee: Number(buyBack.fee.toFixed(2)),
    //       //     buyBackPrice: Number(buyBack.buyBackPrice.toFixed(2)),
    //       //     return: {
    //       //       connect: {
    //       //         id: returnItem.id,
    //       //       },
    //       //     },
    //       //   },
    //       // })
    //     }
    //     await tx.orderLine.update({
    //       where: {
    //         id: Number(item.external_id),
    //       },
    //       data: {
    //         return: {
    //           connect: {
    //             id: returnItem.id,
    //           },
    //         },
    //       },
    //     })
    //   })
    // })

    return NextResponse.json({
      data: "Return created successfully",
    })
  } catch (error) {
    return NextResponse.json({
      error: "Return could not be created",
    })
  }
}
