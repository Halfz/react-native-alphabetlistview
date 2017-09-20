'use strict';

import React, {
  PropTypes
} from 'react';
import ReactNative, {
  View,
  Text
} from 'react-native';

export default class SectionHeader extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.references = {};
  }

  componentDidMount() {
    this.props.updateTag && this.props.updateTag(ReactNative.findNodeHandle(this.references.view), this.props.sectionId);
  }

  render() {
    const SectionComponent = this.props.component;
    const content = SectionComponent ?
      <SectionComponent {...this.props} /> :
      <Text>{this.props.title}</Text>;

    return (
      <View ref={(ref) => (this.references.view = ref)}>
        {content}
      </View>
    );
  }
}

SectionHeader.propTypes = {

  /**
   * The id of the section
   */
  sectionId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),

  /**
   * A component to render for each section item
   */
  component: PropTypes.func,

  /**
   * A function used to propagate the root nodes handle back to the parent
   */
  updateTag: PropTypes.func
};
