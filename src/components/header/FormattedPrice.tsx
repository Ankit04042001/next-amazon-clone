interface Props {
    amount : number
}

function FormattedPrice({amount}:Props) {
    const formattedAmount = new Number(amount).toLocaleString('en-US',{
        style:'currency',
        currency:'INR',
        minimumFractionDigits:2
    })
  return <span>{formattedAmount}</span>
}

export default FormattedPrice