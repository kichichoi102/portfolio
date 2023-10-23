import PropTypes from 'prop-types';

export const Section = (props) => {
  return (
    <section className={`h-screen flex flex-col justify-center p10 ${props.right ? 'items-end' : 'items-start'}`} style={{ opacity: props.opacity }}>
      <div className='w-1/2 flex items-center justify-center'>
        <div className='max-w-sm w-full'>
          <div className='bg-white rounded-lg px-8 py-12'>{props.children}</div>
        </div>
      </div>
    </section>
  );
};

Section.propTypes = {
  right: PropTypes.bool,
  opacity: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};