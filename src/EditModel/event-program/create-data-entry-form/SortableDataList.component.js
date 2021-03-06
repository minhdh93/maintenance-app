import React, { PropTypes } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import DragHandle from './DragHandle.component';
import { grey200 } from 'material-ui/styles/colors';

const styles = {
    dataElement: {
        padding: '1rem 1rem',
        backgroundColor: grey200,
        marginBottom: '4px',
        borderRadius: '8px',
    },

    row: {
        userSelect: 'none',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    horizontalSpace: {
        paddingLeft: '1rem',
    },
};

const SortableDataList = SortableContainer(({ dataElements, isSortingIndex }) => <div>
    { dataElements.map((dataElement, index) => (
        <SortableDataElement
            dataElement={dataElement}
            index={index}
            isSortingIndex={isSortingIndex}
            key={`item-${index}`}
            sortIndex={index}
        />
        ))}
</div>);

const SortableDataElement = SortableElement(({ index, sortIndex, dataElement, isSortingIndex }) => (
    <DataElement index={index} sortOrder={sortIndex} dataElement={dataElement} isSortingIndex={isSortingIndex} />
));

const DataElement = ({ sortOrder, dataElement }) => (
    <div style={styles.dataElement}>
        <div style={styles.row}>
            <DragHandle />
            <div style={styles.horizontalSpace} />
            {dataElement.displayName}
        </div>
    </div>
);

DataElement.propTypes = {
    dataElement: PropTypes.shape({
        id: PropTypes.string.isRequired,
        displayName: PropTypes.string.isRequired,
    }),
    sortOrder: PropTypes.number.isRequired,
};

export default SortableDataList;
