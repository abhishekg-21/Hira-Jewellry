import type { ReactNode, HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  /** Extra classes for the inner container */
  containerClassName?: string;
};

export default function Section({
  children,
  className = "",
  containerClassName = "",
  ...rest
}: SectionProps) {
  return (
    <section className={`w-full ${className}`} {...rest}>
      <div className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
