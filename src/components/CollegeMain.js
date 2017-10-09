/**
 * Created by sravankumarganji on 10/8/17.
 */
import React from 'react'
import { setCollege, getColleges } from './../../actions/colleges'
import 'react-table/react-table.css'
import ReactTable from 'react-table'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import '../../../stylesheets/DataTables.scss'
const { array, bool, object, string } = React.PropTypes

class CollegesMain extends React.Component {
    constructor (props) {
        super(props)
        this.getColumnNames = this.getColumnNames.bind(this)
        this.goToNewPage = this.goToNewPage.bind(this)
        this.filterCollegesBasedOnRole = this.filterCollegesBasedOnRole.bind(this)
        this.state = {
            sort_direction: 'asc',
            collegesToDisplay: []
        }
    }

    componentWillMount () {
        this.props.getColleges()
    }

    componentWillReceiveProps (nextProps) {
        if (JSON.stringify(nextProps.colleges) !== JSON.stringify(this.props.colleges)) {
            this.filterCollegesBasedOnRole(nextProps.colleges)
        }
    }

    componentDidMount () {
        this.filterCollegesBasedOnRole(this.props.colleges)
    }

    goToNewPage (collegeid, college) {
        this.props.setCollege(college)
        this.props.history.push(`/colleges/${collegeid}/edit`)
    }

    filterCollegesBasedOnRole (colleges) {
        // Super User Sees All Colleges
        if (this.props.authRole === 'ADMIN_SUPER_USER') {
            this.setState({collegesToDisplay: colleges})
        } else if (this.props.authRole === 'ADMIN_DISTRICT_USER') {
            // if district user assume they have one college and it ends in 0 and represents a district
            // return all colleges that are in that district
            this.setState({collegesToDisplay: this.props.collegesInDistrict})
        } else {
            // if (this.props.authedColleges.length > 1) {
            var collegesToDisplay = []
            this.props.authedColleges.map((mis) => {
                colleges.map((college) => {
                    if (college.mis === mis) {
                        collegesToDisplay.push(college)
                    }
                })
            })
            if (collegesToDisplay.length > 1) {
                this.setState({collegesToDisplay: collegesToDisplay})
            } else {
                this.goToNewPage(collegesToDisplay[0].id, collegesToDisplay[0])
            }
        }
    }

    getColumnNames (data) {
        const columns = [{
            Header: 'College Name',
            accessor: 'name'
        },
            {
                Header: 'MIS Code',
                accessor: 'mis'
            },
            {
                Header: 'Street Address 1',
                accessor: 'address1'
            },
            {
                Header: 'Postal Code',
                accessor: 'postalcode'
            },
            {
                Header: 'College URL',
                accessor: 'url'
            },
            {
                Header: 'College Main Phone',
                accessor: 'phone'
            }]
        return columns
    }

    render () {
        if (this.state.collegesToDisplay.length > 0) {
            return (
                <div className='CollegesMain'>
                    <h1>Colleges</h1>
                    <div className='container'>
                        <ReactTable
                            className='-striped -highlight'
                            data={this.state.collegesToDisplay}
                            columns={this.getColumnNames(this.props.colleges)}
                            minRows={0}
                            getTdProps={(state, rowInfo, column, instance) => {
                                return {
                                    onClick: e => {
                                        this.goToNewPage(rowInfo.row._original.id, rowInfo.row._original)
                                    }
                                }
                            }}
                        />
                        <div className='cc-form-btn-group'>
                            <button type='button' className='cc-form-btn' onClick={this.props.history.goBack}>
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='loading'>Loading ...</div>
            )
        }
    }
}

CollegesMain.propTypes = {
    colleges: array,
    isLoading: bool,
    hasAuth: bool,
    authRole: string,
    authedColleges: array,
    errorMessage: object
}

const mapStateToProps = (state, props) =>
    ({
        isLoading: state.collegesReducer.getCollegeReducer.isLoading,
        colleges: state.collegesReducer.getCollegeReducer.colleges,
        hasAuth: state.userReducer.hasAuth,
        authRole: state.userReducer.authRole,
        authedColleges: state.userReducer.colleges,
        errorMessage: state.updateErrorMessage,
        collegesInDistrict: state.collegesInDistrict
    })

const mapDispatchToProps = dispatch => {
    return {
        setCollege (college) {
            dispatch(setCollege(college))
        },
        getColleges () {
            dispatch(getColleges())
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollegesMain))
