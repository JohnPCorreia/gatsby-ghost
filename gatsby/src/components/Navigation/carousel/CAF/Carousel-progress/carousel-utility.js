import _ from "lodash"
import MathOp from "../../../../../utils/math-operators"

export const calculateBarHandleSize = (contentSize, totalSize) =>
  _(contentSize)
    .thru(MathOp.divideBy(totalSize))
    .thru(MathOp.multiplyBy(100))
    .valueOf()

export const calculateBarHandlePosition = (
  contentSize,
  totalSize,
  barHandleSize,
  position
) =>
  _(position)
    .thru(MathOp.multiplyBy(contentSize))
    .thru(MathOp.divideBy(totalSize))
    .thru(MathOp.multiplyBy(100))
    .thru(MathOp.subtractBy(barHandleSize))
    .valueOf()
