import React, { FC } from 'react'
import propTypes from 'prop-types'
import { Link } from 'gatsby'

import * as S from './styled'

interface PaginationProps {
  isFirst: boolean
  isLast: boolean
  currentPage: number
  numPages: number
  prevPage: string
  nextPage: string
}

const Pagination: FC<PaginationProps> = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => (
  <S.PaginationWrapper>
    <div>
      {!isFirst && <Link to={prevPage}>← previous page</Link>}
      {!isLast && <Link to={nextPage}>next page →</Link>}
    </div>
    <p>
      {currentPage}th of {numPages} pages
    </p>
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination
