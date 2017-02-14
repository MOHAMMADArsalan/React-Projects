
// _slots={this.slots}
//                 _hours={this.hours}
//                 _selectHours={this.selectHours}
import * as React from "react";

class AddSlot extends React.Component {
    constructor() {
        super();
    }
    checkAvail(userSelect, type) {
        if (type == 'date') {
            // this.date = hour.target.value;
        }
        console.log("valueeeeeeeeeeeeeeee", userSelect.target.value, type)
        this.props._SlotSelectHandler(userSelect.target.value, type)
     
    }
    date = new Date().toISOString().substring(0, 10);
    render() {
        console.log("_avail", this.props._avail)
        return (
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="panel-login">
                        <h1 className="text-center">Book a Slot</h1>
                        <div className="panel-body">
                            <form onSubmit={(e) => { e.preventDefault(); this.props._addSlot() } }>
                                <div className="form-group">
                                    <label htmlFor="date" className="col-sm-2 control-label">Select Date</label>
                                    <input id="date" type="date" defaultValue={this.date} className="form-control" onChange={($event) => { this.checkAvail($event, 'date') } } />
                                </div>
                                <div className="form-inline form-group">
                                    <div className="form-group" >
                                        <label htmlFor="hours">Start Hours:</label>
                                        <select id="hours" className="form-control" name="hour" onChange={($event) => { this.checkAvail($event, 'hour') } }>
                                            {this.props._hours.map((hour, hourIndex) => {
                                                return <option value={hour} key={hourIndex}>{hour}:00 </option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group" >
                                        <label htmlFor="hours1">Select Hours:</label>
                                        <select id="hours1" className="form-control" onChange={($event) => { this.checkAvail($event, 'hour') } } >
                                            {this.props._selectHours.map((selectHours, selectHoursIndex) => {
                                                return <option value={selectHours} key={selectHoursIndex}>{selectHours}:00 </option>
                                            })}
                                        </select>
                                    </div>
                                    {this.props._invalid && <div>This time is reserved by someone</div>}
                                </div>
                                <hr />
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Book Slot</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddSlot;