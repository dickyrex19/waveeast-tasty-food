export default function FoodItem({ image }) {
  return (
    <div className="md:w-4/12 w-full p-1.5">
      <img src={`/images/${image}`} alt="" />
    </div>
  );
}
