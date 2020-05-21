import React from 'react';
import axios from 'axios';
import CarRow from '../components/CarRow';
import { Link } from 'react-router-dom';
import SearchBox from '../components/SearchBox';

class DeleteCars extends React.Component {
    state = {
        cars: [],
        searchText: ''
    }

    componentDidMount = async () => {
        const { personId } = this.props.match.params;
        const { data } = await axios.get(`/api/peoplecars/getcars?personId=${personId}`);
        this.setState({ cars: data });
    }

    onDeleteAllClick = async () => {
        const { personId } = this.props.match.params;
        await axios.post('/api/peoplecars/deletecars', { personId });
        this.props.history.push('/');
    }

    render() {
        const searchText = this.state.searchText.toLowerCase();
        return (
            <div style={{ backgroundColor: 'white', minHeight:1000, paddingTop:10 }}>
                <div className="row">
                    <SearchBox
                        searchText={this.state.searchText}
                        onTextChange={e => this.setState({searchText: e.target.value})}
                        onClearClick={() => this.setState({searchText: ''})}
                    />
                    <div className="col-md-12">
                        <table className="table table-hover table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Make</th>
                                    <th>Model</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.cars
                                .filter(c => `${c.make.toLowerCase()} ${c.model.toLowerCase()}`.includes(searchText))
                                .map(c => <CarRow car={c} key={c.id} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-md-offset-3">
                        <h3>Are you sure you want to delete all of these cars?</h3>
                    </div>
                    <div className="col-md-6" style={{marginTop: 20}}>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <button className='btn btn-primary btn-lg btn-block'>No</button>
                        </Link>
                    </div>
                    <div className="col-md-6" style={{marginTop: 20}}>
                        <button onClick={this.onDeleteAllClick} className='btn btn-danger btn-lg btn-block'>Yes</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteCars;