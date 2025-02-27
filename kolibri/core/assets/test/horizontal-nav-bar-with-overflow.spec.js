import HorizontalNavBarWithOverflowMenu from 'kolibri.coreVue.components.HorizontalNavBarWithOverflowMenu';
import { shallowMount, mount } from '@vue/test-utils';

function makeWrapper({ propsData } = {}) {
  return mount(HorizontalNavBarWithOverflowMenu, { propsData });
}

const longerNavigationList = [
  {
    title: 'Title',
    link: 'url',
    icon: 'dashboard',
    color: 'white',
  },
  {
    title: 'Title 2',
    link: 'url',
    icon: 'dashboard',
    color: 'white',
  },
  {
    title: 'Title 3',
    link: 'url',
    icon: 'dashboard',
    color: 'white',
  },
  {
    title: 'Title 4',
    link: 'url',
    icon: 'dashboard',
    color: 'white',
  },
  {
    title: 'Title 5',
    link: 'url',
    icon: 'dashboard',
    color: 'white',
  },
];

describe('HorizontalNavBarWithOverflowMenu', () => {
  it('smoke test', () => {
    const wrapper = shallowMount(HorizontalNavBarWithOverflowMenu);
    expect(wrapper.exists()).toBe(true);
  });
  it('Renders the Navbar component by default', () => {
    const wrapper = shallowMount(HorizontalNavBarWithOverflowMenu, {
      propsData: {
        navigationLinks: [
          {
            title: 'Title',
            link: 'url',
            icon: 'dashboard',
            color: 'white',
          },
        ],
      },
    });
    expect(wrapper.findComponent({ name: 'Navbar' }).element).toBeTruthy();
  });
  describe('the overflow menu', () => {
    describe('overflow needed', () => {
      const wrapper = makeWrapper(HorizontalNavBarWithOverflowMenu, {
        propsData: {
          navigationLinks: longerNavigationList,
        },
        computed: { windowIsLarge: () => false },
      });
      it('shows a KIconButton when the number of links does not fit in the given viewport', async () => {
        await wrapper.setData({
          numberOfNavigationTabsToDisplay: 2,
          overflowMenuLinks: [
            {
              title: 'Title 3',
              link: 'url',
              icon: 'dashboard',
              color: 'white',
            },
            {
              title: 'Title 4',
              link: 'url',
              icon: 'dashboard',
              color: 'white',
            },
            {
              title: 'Title 5',
              link: 'url',
              icon: 'dashboard',
              color: 'white',
            },
          ],
        });
        expect(wrapper.findComponent({ name: 'KIconButton' }).element).toBeTruthy();
      });
      describe('overflow not needed', () => {
        const wrapper = makeWrapper(HorizontalNavBarWithOverflowMenu, {
          propsData: {
            navigationLinks: longerNavigationList,
          },
        });
        it('does not display a KIconButton with a dropdown menu', () => {
          expect(wrapper.findComponent({ name: 'KIconButton' }).element).toBeFalsy();
        });
      });
    });
  });
});
