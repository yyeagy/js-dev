import './index.css';
import numeral from 'numeral'

/*eslint-disable  no-console*/

const tValue = numeral(1000).format('$0,0.00');
debugger;
console.log('this is bundle test');
console.log(`this is the ${tValue} for this class.`)
