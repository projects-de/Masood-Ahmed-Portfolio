import { Section, SectionHeading } from "./Section";
import { ImpactChart } from "./ImpactChart";

export function Impact() {
  return (
    <Section id="impact">
      <SectionHeading
        eyebrow="Proof, Not Just Claims"
        title="Impact by the numbers"
        description="Measurable outcomes pulled straight from the platforms I've built — compliance, data quality, and delivery speed."
      />
      <ImpactChart />
    </Section>
  );
}
