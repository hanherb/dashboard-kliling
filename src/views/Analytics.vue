<template>
  <d-container fluid class="main-content-container px-4">

    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">

      <!-- Page Header - Title -->
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">Analytics</h3>
      </d-col>

      <!-- Page Header - Datepicker -->
      <d-col sm="4" class="d-flex">
        <d-input-group size="sm" class="d-flex justify-content-end my-auto date-range">
          <d-datepicker v-model="dateRange.from" :highlighted="{ from: dateRange.from, to: dateRange.to || new Date() }" typeable placeholder="Start date" small />
          <d-datepicker v-model="dateRange.to" :highlighted="{ from: dateRange.from, to: dateRange.to || new Date() }" typeable placeholder="End date" small />
          <d-input-group-text slot="append">
            <i class="material-icons">&#xE916;</i>
          </d-input-group-text>
        </d-input-group>
      </d-col>

    </d-row>

    <!-- Small Stats Blocks -->
    <d-row>
      <d-col v-for="(stats, idx) in smallStats" :key="idx" md="6" lg="3" class="mb-4">
        <small-stats :id="`small-stats-${idx}`" :chart-data="stats.datasets" :label="stats.label" :value="stats.value" :percentage="stats.percentage" :increase="stats.increase" :decrease="stats.decrease" />
      </d-col>
    </d-row>

    <d-row>
      <!-- Sessions -->
      <d-col lg="8" md="12" sm="12" class="mb-4">
        <ao-sessions />
      </d-col>

      <!-- Users by Device -->
      <d-col lg="4" md="6" sm="6" class="mb-4">
        <ao-users-by-device />
      </d-col>

      <!-- Top Referrals -->
      <d-col lg="3" sm="6" class="mb-4">
        <ao-top-referrals />
      </d-col>

      <!-- Goals Overview -->
      <d-col lg="5" class="mb-4">
        <ao-goals-overview />
      </d-col>

      <!-- Users by Country -->
      <d-col lg="4" class="mb-4">
        <country-reports />
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import graphqlFunction from '@/graphqlFunction';
import basicFunction from '@/basicFunction';
import address from '@/address';
import headers from '@/headers';
import SmallStats from '@/components/common/SmallStats.vue';
import CountryReports from '@/components/common/CountryReports.vue';
import TopReferrals from '@/components/common/TopReferrals.vue';
import Sessions from '@/components/analytics/Sessions.vue';
import UsersByDevice from '@/components/analytics/UsersByDevice.vue';
import GoalsOverview from '@/components/analytics/GoalsOverview/GoalsOverview.vue';

import colors from '../utils/colors';

export default {
  name: 'analytics',
  components: {
    SmallStats,
    CountryReports,
    aoSessions: Sessions,
    aoUsersByDevice: UsersByDevice,
    aoTopReferrals: TopReferrals,
    aoGoalsOverview: GoalsOverview,
  },
  data() {
    return {
      dateRange: {
        from: null,
        to: null,
      },
      users: [],
      consults: [],
      commerces: [],
    };
  },
  computed: {
    // Small Stats Components Data
    smallStats() {
      return [{
        label: 'Users',
        value: this.users.length,
        percentage: '12.4%',
        increase: true,
        decrease: false,
        datasets: [{
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: colors.primary.toRGBA(0.1),
          borderColor: colors.primary.toRGBA(),
          data: [9, 3, 3, 9, 9],
        }],
      }, {
        label: 'Consults',
        value: this.consults.length,
        percentage: '7.21%',
        increase: false,
        decrease: true,
        datasets: [{
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: colors.success.toRGBA(0.1),
          borderColor: colors.success.toRGBA(),
          data: [3.9, 4, 4, 9, 4],
        }],
      }, {
        label: 'Commerce',
        value: this.commerces.length,
        percentage: '3.71%',
        increase: true,
        decrease: false,
        datasets: [{
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: colors.warning.toRGBA(0.1),
          borderColor: colors.warning.toRGBA(),
          data: [6, 6, 9, 3, 3],
        }],
      }, {
        label: 'Pages/Session',
        value: '6.43',
        percentage: '2.71%',
        increase: false,
        decrease: true,
        datasets: [{
          label: 'Today',
          fill: 'start',
          borderWidth: 1.5,
          backgroundColor: colors.salmon.toRGBA(0.1),
          borderColor: colors.salmon.toRGBA(),
          data: [0, 9, 3, 3, 3],
        }],
      }];
    },
  },

  created: function()
  {
    this.fetchUsers();
    this.fetchConsult();
    this.fetchCommerce();
  },

  methods: {
    fetchUsers() {
      this.axios.get(address + ":3000/get-user", headers).then((response) => {
        let query = `query getAllUser {
          users {
            _id
            fullname
            email
            role
            authority
          }
        }`;
        graphqlFunction.graphqlFetchAll(query, (result) => {
          this.users = result.users;
        });
      })
    },
    fetchConsult() {
      this.axios.get(address + ":3000/get-consult", headers).then((response) => {
        let query = `query getAllConsult {
          consults {
            _id
            doctor_name
            patient_name
            checkin_date
            consult_date
            diagnosis
            medicine
            status
          }
        }`;
        graphqlFunction.graphqlFetchAll(query, (result) => {
          this.consults = result.consults;
        });
      });
    },
    fetchCommerce() {
      this.axios.get(address + ":3000/get-commerce", headers).then((response) => {
        let query = `query getallCommerce {
          commerces {
            _id
            name
            price
            qty
            description
            user
            image
          }
        }`;
        graphqlFunction.graphqlFetchAll(query, (result) => {
          this.commerces = result.commerces;
        });
      });
    },
  }
};
</script>

