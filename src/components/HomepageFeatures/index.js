import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "User Friendly Interface",
    Svg: require("@site/static/img/design-sprint.svg").default,
    description: (
      <>
        Designed with simplicity in mind, so you can focus on your content.
        Secure and Reliable.
      </>
    ),
  },
  {
    title: "Integration with Popular Tools",
    Svg: require("@site/static/img/pair-programming.svg").default,
    description: (
      <>
        Seamlessly integrate with other tools and services you already use, like
        GitHub, Slack, and more.
      </>
    ),
  },
  {
    title: "Multilingual Support",
    Svg: require("@site/static/img/multilingual.svg").default,
    description: (
      <>
        Create and manage documentation in multiple languages to reach a global
        audience.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}