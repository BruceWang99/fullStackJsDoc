import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'HTML、CSS常用',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        覆盖基础布局和样式开发
      </>
    ),
  },
  {
    title: 'JavaScript基础和高级语法特性',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        夯实前端开发基础
      </>
    ),
  },
  {
    title: 'Node.js服务端技术栈',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        打通前后端边界
      </>
    ),
  },
  {
    title: '数据库技术栈',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        把握数据管理和使用
      </>
    ),
  },
  {
    title: '全干开发流程和工具',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        RESTful API设计、Webpack、Git版本控制、测试、部署等
      </>
    ),
  },
  {
    title: '全干性能优化和安全',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        构建稳定安全应用
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
