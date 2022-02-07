import classNames from "classnames"

const Textarea = (props) => {
  const { className, ...otherProps } = props

  return (
    <textarea
      {...otherProps}
      className={classNames("border-2 border-slate-100 p-2", className)}
    />
  )
}

export default Textarea
