import { Link } from 'react-router-dom';

const FormList = ({ forms }) => {
    return (
        <div className="form-list">
            {forms.map(form => (
                <div className="formPreview" key={form.id} >
                    <Link to={`/forms/${form.id}`}>
                        <h2>{form.fields}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default FormList;