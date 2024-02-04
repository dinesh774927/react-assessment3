import './index.css'

const Items = props => {
  const {items, func} = props

  const change = () => {
    func(items.id)
  }
  return (
    <li>
      <button onClick={change} className="thumb-button" type="button">
        <img className="thumb" alt="thumbnail" src={items.thumbnailUrl} />
      </button>
    </li>
  )
}

export default Items
