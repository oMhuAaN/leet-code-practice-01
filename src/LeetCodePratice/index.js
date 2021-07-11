import React from 'react';


class LeetCodePratice extends React.Component {
  static defaultProps = {
    nums: [2, 7, 11, 15, 3, 6],
    target: 18,
  }
  render() {
    const nums = this.props.nums
    const target = this.props.target
    let result = ''
    for (let [i1, v1] of nums.entries()) {
      for (let [i2, v2] of nums.entries()) {
        if (i1 === i2) {
          continue
        }
        if (v1 + v2 === target) {
          result = [i1, i2]
          break
        }
      }
      if (result) {
        break
      }

    }
    if (result) {
      result = `第一个下标是${result[0]},第二个下标是${result[1]}。`
    } else {
      result = `没结果`
    }

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#282c34',
        width: '100%',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '1000px',
          height: '500px',
          backgroundColor: '#fff',
          border: '1px solid red',
        }}>
          <p>1:两数之和</p>
          <p>结果是{result}</p>
        </div>
      </div>
    );
  }
}

export default LeetCodePratice;