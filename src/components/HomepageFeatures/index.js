import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '稳定高效',
    Svg: require('@site/static/img/undraw_link_mountain.svg').default,
    description: (
      <>
        提供优化后的 TUN/VPN 体验，兼顾 ARM64 性能、低占用和多平台稳定运行
      </>
    ),
  },
  {
    title: '可靠易用',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
         基于 Mihomo 内核,拥有优秀的稳定性与易用性
      </>
    ),
  },
  {
    title: '高度自定义，持续维护',
    Svg: require('@site/static/img/undraw_Bettbox_Flutter.svg').default,
    description: (
      <>
        支持主题、图标、组件等个性化设置，兼容旧设备，开源透明，并积极响应社区反馈持续优化
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
