type Props = {
  step: number;
  title: string;
  desc: string;
};

export default function StepCard({ step, title, desc }: Props) {
  return (
    <div className="card bg-base-100 shadow text-center">
      <div className="card-body">

        <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-warning text-neutral flex items-center justify-center text-xl font-bold">
          {step}
        </div>

        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-base-content/70 mt-2">
          {desc}
        </p>
      </div>
    </div>
  );
}
