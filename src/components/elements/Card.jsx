export function Card({ cardName }) {
  return (
    <div className="flex text-start bg-gray-300 rounded-[12px w-[289px] h-[320px] px-3">
      {cardName}
    </div>
  );
}
