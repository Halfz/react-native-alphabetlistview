'use strict';

import React from 'react';
import ReactNative, {
    View,
} from 'react-native';
import PropTypes from 'prop-types';

export default class CellWrapper extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.references = {};
  }

  componentDidMount() {
    this.props.updateTag && this.props.updateTag(ReactNative.findNodeHandle(this.references.view), this.props.sectionId);
  }

  render() {
    const Cell = this.props.component;
    return (
      <View ref={(ref) => (this.references.view = ref)}>
        <Cell {...this.props} />
      </View>
    );
  }
}

CellWrapper.propTypes = {

  /**
   * The id of the section
   */
  sectionId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),

  /**
   * A component to render for each cell
   */
  component: PropTypes.func.isRequired,

  /**
   * A function used to propagate the root nodes handle back to the parent
   */
  updateTag: PropTypes.func,

};
