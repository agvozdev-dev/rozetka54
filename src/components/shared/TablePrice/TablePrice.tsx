import { Price } from 'components/types/Price'
import React from 'react'
import classNames from 'classnames'
import './table-price.scss'

type TablePriceProps = {
  prices: Price[]
  tableExtraClass?: string
  top?: number
}

const TablePrice: React.FC<TablePriceProps> = ({ prices, tableExtraClass, top }) => {
  const tableClassName = classNames('table-price', tableExtraClass)
  const pricesToView = top ? prices.slice(0, top) : prices
  return (
    <div className={tableClassName}>
      <div className="table-price__head">
        <div className="table-price__column table-price__head-cell">Услуга</div>
        <div className="table-price__column table-price__head-cell">Цена</div>
      </div>
      <div className="table-price__body">
        {pricesToView.map((price: Price, index: number) => (
          <div className="table-price__row" key={`table-price__row-${index}`}>
            <div className="table-price__column table-price__body-cell">
              {price.serviceName}
            </div>
            <div className="table-price__column table-price__body-cell">
              {price.servicePrice}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TablePrice
