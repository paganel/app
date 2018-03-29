import * as React from 'react'
import ReactTable from 'react-table'
import axios from 'axios'
import Timestamp from 'react-timestamp'

import { getApiAuth, apiUrl } from './utils'
import FeedbackDetails from './FeedbackDetails'

export const ValueCell = ({ value }) => (
  <span className={value === 5 ? 'green' : 'red'}>
    {value === 5 && '👍'}
    {value !== 5 && '👎'}

    <style jsx="">{`
      .red,
      .green {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 0 0 5px;
      }

      .green {
        border-left: 5px solid darkseagreen;
      }
      .red {
        border-left: 5px solid darkorange;
      }
    `}</style>
  </span>
)

export async function loadData({ req }) {
  return axios.get(apiUrl(req) + '/api/feedback', { headers: { ...getApiAuth(req) } }).then(response => response.data)
}

export class FeedbackTable extends React.Component {
  render() {
    return (
      <ReactTable
        defaultPageSize={10}
        data={this.props.data}
        columns={[
          {
            Header: 'moment',
            accessor: 'createdAt',
            Cell: row => <Timestamp time={row.value} />,
          },
          {
            Header: 'href',
            accessor: 'href',
            Cell: row => {
              if (!row.value) return
              // cut end slash if found
              const end = row.value[row.value.length - 1] === '/' ? row.value.length - 1 : undefined
              // return without scheme
              return row.value.substring(row.value.indexOf('://') + 3, end)
            },
          },
          {
            Header: 'comment',
            accessor: 'comment',
          },
          {
            Header: 'experience',
            accessor: 'rating',
            style: {
              padding: 0,
            },
            Cell: row => <ValueCell value={row.value} />,
          },
        ]}
        SubComponent={row => {
          return <FeedbackDetails {...row.original} />
        }}
      />
    )
  }
}

export default FeedbackTable
