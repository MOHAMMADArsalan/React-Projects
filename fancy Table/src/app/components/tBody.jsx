import React from "react";
class TableBody extends React.Component {
    render() {
        return (
            <tbody onDoubleClick={this.props._showEditor}>
                {this.props.data.map((row, rowIndex) => {
                    return <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => {
                            let content = cell;
                            if (this.props._edit && this.props._edit.row === rowIndex && this.props._edit.cell === cellIndex) {
                                content = (<form onSubmit={this.props._save}>
                                    <input defaultValue={cell} type="text" />
                                </form>)
                            }
                            return <td key={cellIndex} data-row={rowIndex}>{content}</td>
                        })}
                    </tr>
                })}
            </tbody>
        )
    }
}
TableBody.PropTypes = {
    data: React.PropTypes.arrayOf(
        React.PropTypes.arrayOf(React.PropTypes.string)
    ),
    _showEditor: React.PropTypes.func.isRequired,
    _save: React.PropTypes.func.isRequired,
    _edit: React.PropTypes.objectOf({ row: React.PropTypes.number.isRequired, cell: React.PropTypes.number.isRequired })
}
export default TableBody;