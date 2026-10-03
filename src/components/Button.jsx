
const Button = ({ className, btntext }) => {
  return (
      <button className={`py-5 px-7 bg-blue-600 text-center text-white rounded-md hover:bg-teal-700 ${className}`}>{btntext}</button> 
  )
}

export default Button
