import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'eCompass',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The tool to set your machine. A powerful tool to keep control of your Combilift.
      </>
    ),
  },
  {
    title: 'eLogs',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        eLogs is a diagnostics and historical logging tool for your machine.
      </>
    ),
  },
  {
    title: 'Training',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Keep yourself updated with the latest training courses available at Combilift.
      </>
    ),
  },
  {
    title: 'Phone Support',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Combilift engineers and local subsidiaries provide expert telephone support and immedicate response to urgent situations.

        COMBILIFT HQ: +353 47 80500

        COMBILIFT USA: 336-378-8884
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
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
