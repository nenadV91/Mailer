import React from 'react'
import moment from 'moment'


export default ({
  classes
}) => [{
  Header: "",
  width: 40,
  Cell: props => <span className="text-center">{props.index + 1}</span>,
}, {
  Header: 'Subject',
  accessor: 'subject',
  width: 200
}, {
  Header: 'Date',
  accessor: 'date',
  Cell: props => <span className="text-center">
    {moment(props.value).format('MMMM Do YYYY, h:mm:ss a')}
  </span>
}, {
  Header: 'Template',
  accessor: 'template',
  Cell: props => <span className="text-center">{props.value}</span>
}, {
  Header: 'Email',
  accessor: 'to',
}]