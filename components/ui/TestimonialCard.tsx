type TestimonialCardProps = {
  name: string;
  rank: string;
  message: string;
};

export default function TestimonialCard({
  name,
  rank,
  message,
}: TestimonialCardProps) {
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <p className="text-sm text-base-content/80">
          “{message}”
        </p>

        <div className="mt-4">
          <p className="font-semibold">{name}</p>
          <p className="text-xs text-base-content/60">
            {rank}
          </p>
        </div>
      </div>
    </div>
  );
}
