import React, { useState } from 'react'
import { CSSTransition, Transition } from 'react-transition-group'
import Character from './Character'
import { List } from './List'

const App = ({ list }) => {
  const [toggle, setToggle] = useState(true)
  const [toggle2, setToggle2] = useState(true)
  const [items, setItems] = useState([
    { id: 1, title: 'item 1' },
    { id: 2, title: 'item 2' },
    { id: 3, title: 'item 3' },
    { id: 4, title: 'item 4' },
    { id: 5, title: 'item 5' },
  ])

  const removeItem = (id) => setItems(items.filter((i) => i.id !== id))

  const addItem = () => {
    const title = `item ${items.length + 1}`
    const id = items.length + 1

    setItems(items.concat([{ title, id }]))
  }

  return (
    <div className="container">
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <button onClick={() => setToggle2(!toggle2)}>Toggle 2</button>
      <button onClick={addItem}>Add Item</button>
      <hr />
      <div className="blocks">
        <Transition
          in={toggle}
          timeout={{ enter: 1000, exit: 500 }}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExit={() => console.log('onExit')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
        >
          {(state) => <div className={`square blue ${state}`}>{state}</div>}
        </Transition>
        <CSSTransition
          in={toggle2}
          timeout={1000}
          classNames="os"
          mountOnEnter
          unmountOnExit
        >
          <div className="square orange">{toggle2.toString()}</div>
        </CSSTransition>
      </div>
      <div className="blocks">
        <List items={items} onRemove={removeItem} />
      </div>
      {items.map((item) => (
        <Character key={item.id} item={item} onRemove={removeItem} />
      ))}
      <ul>
        {list.map((it, ind) => (
          <li key={it.ind + it.name}>
            <strong>{it.name}: </strong>side - {it.side}
          </li>
        ))}
      </ul>
    </div>
  )
}

const withFilteredProps = (Component) => ({ list, side }) => {
  const filteredList = list.filter((ch) => ch.side === side)
  return <Component list={filteredList} />
}

const FilteredList = withFilteredProps(App)

export default FilteredList
