type Props = {
  className: string
  value: string
}

const Badge = ({ className, value }: Props) => {
  return <div className={`badge ${className}`}>{value}</div>
}
export default Badge
