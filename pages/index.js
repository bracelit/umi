
import styles from './index.css';
import Link from 'umi/link'
import {Icon}from 'antd'
// import profession from '../images/profession.gif'

export default function() {
  return (
    <div className={styles.normal}>
      <Link to='./test'><h1>hello world</h1></Link>
      <Icon type="apple" />
    </div>
  );
}
