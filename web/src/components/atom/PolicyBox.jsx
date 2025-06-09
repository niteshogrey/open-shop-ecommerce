
const PolicyBox = ({icon, title, desc}) => {
  return (
    <section className=" flex  flex-col items-center gap-2 group">
        <span className="transition-transform duration-300 group-hover:text-violet-800 group-hover:-translate-y-2">{icon}</span>
        <h6 className="text-lg font-semibold">{title}</h6>
        <p>{desc}</p>
    </section>
  )
}

export default PolicyBox