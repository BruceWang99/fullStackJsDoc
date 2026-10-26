import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '前端工程基础',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        HTML / CSS / JS / TS / React / Vue，夯实前端根基。
      </>
    ),
  },
  {
    title: 'Node.js 与服务端',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        打通前后端边界，掌握服务端、数据库与部署。
      </>
    ),
  },
  {
    title: 'AI 工程实践',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Prompt、RAG、Agent、LLM API 接入与产品化落地。
      </>
    ),
  },
  {
    title: 'AI 辅助研发',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Copilot / Cursor / 自动化工作流，把 AI 变成日常生产力。
      </>
    ),
  },
  {
    title: '工程化与性能优化',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        构建、监控、安全与性能调优，交付稳定可上线的应用。
      </>
    ),
  },
  {
    title: '产品孵化与写作',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        小产品从 0 到 1，记录真实开发历程与踩坑复盘。
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
        <h3>{title}</h3>
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
