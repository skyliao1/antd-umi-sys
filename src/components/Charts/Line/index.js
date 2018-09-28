import Basic from '../Basic_line_bar';
export default (props) => {
    const {
        type = 'Line',
        ...rest
    } = props;


    return (
        <Basic type={type} {...rest} />
    );
};
