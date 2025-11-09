import Image from "next/image"

const ClientReviewCard = ({name, image, role}) => {
  return (
    <div className="m-2">
      <Image
        src={image}
        alt="image"
        width={60}
        height={60}
        className="rounded-full"
      />
      <p className="mt-6 text-base text-gray-200 font-medium">
        &quot; Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sed suscipit deserunt fugit hic beatae reiciendis iure. Corporis, quo debitis. &quot;
      </p>
      <h1 className="mt-6 text-xl text-cyan-200 font-bold">{name}</h1>
      <p className="mt-1 text-white">{role}</p>
    </div>
  )
}

export default ClientReviewCard