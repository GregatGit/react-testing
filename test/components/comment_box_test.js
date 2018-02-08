import { renderComponent, expect } from '../test_helper'
import Comment_box from '../../src/components/comment_box'

describe('Comment Box', () => {

  it('has a text area', () => {
    const component = renderComponent(Comment_box)
    expect(component.find('textarea')).to.exist
  })

  it('has a button', () => {
    const component = renderComponent(Comment_box)
    expect(component.find('button')).to.exist
    
  })
})
