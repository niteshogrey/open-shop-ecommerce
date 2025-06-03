
const Search = ({placeholder, className}) => {
  return (
    <div className="w-full">
        <input placeholder={placeholder} type="text" className={`border w-[100%] ${className} focus:outline-none`} />
    </div>
  )
}

export default Search