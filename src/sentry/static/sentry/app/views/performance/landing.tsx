import React from 'react';
import styled from '@emotion/styled';
import {Location} from 'history';

import {t} from 'app/locale';
import {Organization} from 'app/types';
import withOrganization from 'app/utils/withOrganization';
import SentryDocumentTitle from 'app/components/sentryDocumentTitle';
import GlobalSelectionHeader from 'app/components/organizations/globalSelectionHeader';
import {PageContent} from 'app/styles/organization';
import NoProjectMessage from 'app/components/noProjectMessage';

import EventView from 'app/views/eventsV2/eventView';

type Props = {
  organization: Organization;
  location: Location;
};

type State = {
  eventView: EventView;
};

class PerformanceLanding extends React.Component<Props, State> {
  static getDerivedStateFromProps(nextProps: Props, prevState: State): State {
    const eventView = EventView.fromLocation(nextProps.location);
    return {...prevState, eventView};
  }

  state = {
    eventView: EventView.fromLocation(this.props.location),
  };

  render() {
    const {organization} = this.props;

    return (
      <SentryDocumentTitle title={t('Performance')} objSlug={organization.slug}>
        <React.Fragment>
          <GlobalSelectionHeader organization={organization} />
          <StyledPageContent>
            <NoProjectMessage organization={organization}>hello</NoProjectMessage>
          </StyledPageContent>
        </React.Fragment>
      </SentryDocumentTitle>
    );
  }
}

const StyledPageContent = styled(PageContent)`
  padding: 0;
`;

export default withOrganization(PerformanceLanding);