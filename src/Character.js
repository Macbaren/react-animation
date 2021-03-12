import React from 'react'

export default ({ item, onRemove }) => (
  <li onClick={() => onRemove(item.id)}>{item.title}</li>
)
