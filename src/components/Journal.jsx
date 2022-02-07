import formatAmount from "@/formatAmount"
import classNames from "classnames"
import { useMemo } from "react"

const Journal = (props) => {
  const { entries, className, ...otherProps } = props
  const totalIncoming = useMemo(
    () =>
      entries
        .filter(({ amount }) => amount > 0)
        .reduce((total, { amount }) => total + amount, 0),
    [entries]
  )
  const totalOutgoing = useMemo(
    () =>
      entries
        .filter(({ amount }) => amount < 0)
        .reduce((total, { amount }) => total + amount, 0),
    [entries]
  )
  const result = totalIncoming + totalOutgoing

  return (
    <table
      {...otherProps}
      className={classNames(className, "table-fixed w-full")}
    >
      <thead>
        <tr className="border-b-2 font-bold">
          <th className="p-2 border-r">INCOMING</th>
          <th className="p-2">OUTGOING</th>
        </tr>
      </thead>
      <tbody>
        {entries.map(({ amount, description }, index) => (
          <tr key={index} className={classNames({ "bg-slate-100": index % 2 })}>
            {amount > 0 ? (
              <>
                <td className="text-right p-2 border-r">
                  <span className="font-bold text-green-500">
                    {formatAmount(amount)}
                  </span>
                  <p className="italic">{description}</p>
                </td>
                <td />
              </>
            ) : (
              <>
                <td />
                <td className="text-right p-2 border-l">
                  <span className="font-bold text-red-500">
                    {formatAmount(amount)}
                  </span>
                  <p className="italic">{description}</p>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
      <tfoot className="border-t-2">
        <tr>
          <th className="border-r">
            <div className="flex justify-between p-2">
              <span className="font-bold">TOTAL</span>
              <span className="text-green-500">
                {formatAmount(totalIncoming)}
              </span>
            </div>
          </th>
          <th>
            <div className="flex justify-between p-2">
              <span className="font-bold">TOTAL</span>
              <span className="text-red-500">
                {formatAmount(totalOutgoing)}
              </span>
            </div>
          </th>
        </tr>
        <tr className="border-t-2">
          <th colSpan={2}>
            <div className="flex justify-between p-2">
              <span className="font-bold">RESULT</span>
              <span className={`text-${result >= 0 ? "green" : "red"}-500`}>
                {formatAmount(result)}
              </span>
            </div>
          </th>
        </tr>
      </tfoot>
    </table>
  )
}

export default Journal
