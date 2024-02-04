import './index.css'

const TabItems = props => {
  const {item, func, button} = props

  const tabsChange = () => {
    func(item.tabId)
  }
  return (
    <li>
      <button
        onClick={tabsChange}
        className={button === item.tabId ? 'tab-button2' : 'tab-button'}
        type="button"
      >
        {item.displayText}
      </button>
      <hr className={button === item.tabId ? 'hr' : 'hr-none'} />
    </li>
  )
}

export default TabItems
