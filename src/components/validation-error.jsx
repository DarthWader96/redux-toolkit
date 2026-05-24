import { useCallback } from "react"
import { useSelector } from "react-redux"

const ValidationError = () => {
    const { error } = useSelector(state => state.auth)

    const errorMessage = useCallback(() => {
        return Object.keys(error).map(name => {
            const msg = error[name].join(', ')
            return `${name} - ${msg}`
        })
    }, [error])

    return (
        error !== null && errorMessage().map(err=>(
            <div className="alert alert-danger my-2 p-1 text-start" role="alert" key={err}>
                {err}
            </div>
        ))
    )
}

export default ValidationError