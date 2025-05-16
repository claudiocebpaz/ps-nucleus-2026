import React, { useMemo } from "react";
import DynamicIcon from "./DynamicIcon";

export type FeatureItem = {
  name: string;
  description: string;
  icon: string;
};

type TextSectionProps = {
  price: string;
  title: string;
  subtitle: string;
  features: FeatureItem[];
};

const TextSection: React.FC<TextSectionProps> = ({
  price,
  title,
  subtitle,
  features,
}) => {
  // 🏆 Memoiza la lista de características para evitar cálculos innecesarios
  const renderedFeatures = useMemo(() => {
    return features.map((feature) => (
      <div key={feature.name} className="relative pl-9 mb-4">
        <dt className="inline font-semibold text-gray-900">
          <DynamicIcon
            iconName={feature.icon}
            className="absolute top-1 left-1 w-5 h-5 text-gray-700"
          />
          {feature.name}. <br />
        </dt>
        <dd className="inline text-sm">{feature.description}</dd>
      </div>
    ));
  }, [features]);

  return (
    <div className="order-2 lg:col-span-4 lg:order-1">
      <h2 className="text-xl font-semibold text-gray-700">{price}</h2>
      <p className="font-quattrocento mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
        {title}
      </p>
      <p className="font-lora mt-2 text-lg text-gray-600">{subtitle}</p>
      <dl className="mt-6 space-y-8 text-base text-gray-600">
        {renderedFeatures}
      </dl>
    </div>
  );
};

export default TextSection;
