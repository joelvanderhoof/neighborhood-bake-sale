import React, { Component } from 'react';

class Rating extends Component {
  render () {
    return (
      <ul className='border list-inline'>
        Rating Component
        <br />
        <li id='rating-1' className='list-inline-item rating-item border'>1</li>
        <li id='rating-2' className='list-inline-item rating-item border'>2</li>
        <li id='rating-3' className='list-inline-item rating-item border'>3</li>
        <li id='rating-4' className='list-inline-item rating-item border'>4</li>
        <li id='rating-5' className='list-inline-item rating-item border'>5</li>
      </ul>
    )
  }
}

export default Rating;