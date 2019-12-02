const PositiveMessage = () => <p>Nie mozesz obejrzec tego filmu jestli masz mniej niz 16lat!</p>

const NegativeMessage = () => <p>Mozesz obejrzec film</p>

const Checkbox = (props) => (
    <label>
        <input type="checkbox" checked={props.checked} onChange={props.onChange} />
        Mam co najmniej 16 lat
    </label>
)

class App extends React.Component {

    state = {
        checked: false
    }

    handleCheckboxChange = () => (
        this.setState({
            checked: !this.state.checked
        })
    )

    render() {
        return (
            <>
                <h1>Kup bilet na horror roku!</h1>
                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleCheckboxChange}
                />
                {this.state.checked ? <NegativeMessage /> : <PositiveMessage />}
            </>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));