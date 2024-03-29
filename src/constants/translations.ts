import Config from "./Config";

const translations = {
  en: {
    translation: {
      footer: {
        agencies: "agencies",
        blog: "blog",
        offers: "offers",
        terms: "terms",
        conditions: "conditions"
      },

      navbar: {
        sign_up: "Sign Up",
        log_in: "log in",
        offers: "offers",
        agencies: "agencies",
        blog: "blog",
        my_account: "my account",
        log_out: "log out"
      },

      notifications: {
        notifications: 'notifications',
        messages: 'messages',
        events: 'events',
        invites: 'invites',
        clear_all: 'clear all',
        no_events: 'You have got no upcoming events',
        no_messages: 'You have got no messages',
        no_notifications: 'You have got no notifications',
        no_invites: 'You have got no invites'
      },

      landing_page: {
        first_section: {
          main_header_text: "... for agents, for clients, for ",
          main_everyone: "everyone",
          main_paragraph_text: "Discover the easiest way to run your agancy or search for real estate of your dreams.",
        },
        join_now: 'Join now',
        log_in: 'Log in',
        blog: 'blog posts',
        agencies: 'cooperating agencies',
        offers: 'real estate offers'
      },

      sign_up_page: {
        title_sign: 'Sign ',
        title_up: 'Up',
        subtitle: '...or if you already have an account ',
        log_in: 'log in',
        sign_up_form_title: 'Sign up as ',
        user: {
          title: Config.ACCOUNT_NAME_USER,
          content: 'For people that want to browse through the offers more effectively or ask some questions on the blog.',
          button_text: 'register new user',
          pros: 'browse offers;contact with agents;use chat;ask blog questions'
        },
        agent: {
          title: Config.ACCOUNT_NAME_AGENT,
          content: 'For real estate agents who already have a job ...or are currently looking for new agency to employ them.',
          button_text: 'register new agent',
          pros: 'add offers;work with agency;generate documents;answer blog questions'
        },
        agency: {
          title: Config.ACCOUNT_NAME_AGENCY,
          content: 'For agency owners, managers or simply administration workers looking for nice and effective CRM tool.',
          button_text: 'register new agency',
          pros: 'run your agency;monitor agents work;generate raports;manage agency'
        },
        form: {
          button: 'Submit',
          label: {
            username: 'username',
            e_mail: 'e-mail',
            password: 'password',
            confirm_password: 'confirm password'
          },
          error_message: {
            username: {
              too_short: 'username should have at least 6 characters',
              already_taken: 'username already taken'
            },
            email: {
              email_invalid: 'email is invalid',
              alredy_exists: 'account with that email already exists'
            },
            password: {
              too_short: 'password should have at least 8 characters',
              uppercase: 'password should have at least one uppercase character',
              confirmed: 'confirmed password should be the same as password'
            }
          }
        }
      },

      log_in_page: {
        log_in_form_title: 'Log In',
        form: {
          button: 'Log in',
          label: {
            username: 'username',
            password: 'password',
          },
        }
      },

      offers_page: {
        add_new_offer: 'Add an offer',
      },

      offer_creation_page: {
        offer_success: 'An offer has been successfully published!',
        success_uploads: 'Successfully uploaded files:',
        invalid_data: 'Offer data is invalid',
        create_new_offer: 'Create new offer',
        real_estate_category: 'category',
        title: 'title',
        description: 'description',
        furnished: 'furnished',
        area: 'area',
        floor: 'floor',
        rooms: 'rooms',
        offer_type: 'offer type',
        price: 'price',
        negotiable: 'negotiable',
        offer_categories: {
          agricultural: 'agricultural',
          residential: 'residential',
          commercial: 'commercial',
          industrial: 'industrial',
          raw_land: 'raw land',
          special_use: 'special use'
        },
        offer_types: {
          disposal: 'disposal',
          rent: 'rent'
        },
        per_month: '/month',
        address: 'address',
        publish_offer: 'publish offer',
        images: 'images'
      },

      account: {
        menu: {
          account: 'account',
          settings: 'settings',
          calendar: 'calendar',
          contacts: 'contacts',
          notes: 'notes',
          clients: 'clients',
          agency: 'agency'
        }
      },

      calendar: {
        your: "YOUR CALENDAR",
        months: {
          "1": "January",
          "2": "February",
          "3": "March",
          "4": "April",
          "5": "May",
          "6": "June",
          "7": "July",
          "8": "August",
          "9": "September",
          "10": "October",
          "11": "November",
          "12": "December",
        },
        days: {
          "1": "M",
          "2": "T",
          "3": "W",
          "4": "T",
          "5": "F",
          "6": "S",
          "7": "S",
        }
      },

      events: {
        add_event: 'add new event',
        no_events: 'You have got no events planned for this day',
        title: 'title',
        description: 'description',
        confirm_add_event: 'add event',
        delete_event: 'delete event',
        you: 'you',
        leave_event: 'leave event',
        invite_participants: 'invite participants',
        send_invites: 'send invites',
        search_for: 'search for contacts to invite',
        invites_sent: 'Invites has been sent!',
        no_back: 'No, go back',
        yes_delete: 'Yes, delete',
        sure_delete: 'Are you sure you want to delete this event?'
      },

      contacts: {
        your: 'Your contacts',
        search_label: 'search for new contacts',
        search_placeholder: 'type user credentials here',
        cancel_invitation: 'cancel',
        are_sure: 'Are you sure you want to remove this user contact?',
        yes_remove: 'Yes, remove',
        no_go_back: 'No, go back',
        chatting_with: 'Chatting with ',
        you: 'You'
      },

      notes: {
        save_note: 'save note',
        note_saved: 'Note has been saved!',
        filter_events: 'filter events',
        event_desc: 'Event description',
        event_part: 'Event partcipants'
      },

      blog: {
        blog: 'Blog',
        search_posts: 'Search for posts',
        your_posts: 'Your posts',
        add_post: 'write a post',
        most_recent: 'Most recent posts',
        most_upvoted: 'Most upvoted posts',
        search_results: 'Search results:',
        no_data: 'Sorry, no data found :('
      },

      blog_creation: {
        title: 'title',
        description: 'description',
        tags: 'add tags',
        create_new_post: 'Create new post',
        tag_values: {
          question: 'question',
          info: 'info',
          ad: 'ad',
          job: 'job',
          industrial: 'industrial',
          residential: 'residential',
          disposal: 'disposal',
          rental: 'rental',
          legal: 'legal',
          issue: 'issue',
          investment: 'investment'
        },
        publish: 'publish post',
        post_created: 'Post has been created!'
      },

      post: {
        posted_at: 'Posted: ',
        posted_by: ' by ',
        reply: 'Reply',
        upvotes: 'Upvotes',
        your_reply: 'Your reply',
        publish: 'publish',
        close: 'close',
        offer: 'This post is related to',
        this_offer: 'this offer'
      },

      account_info: {
        not_completed: 'not completed',
        first_name: 'First name',
        last_name: 'Last name',
        email: 'E-mail',
        account_role: 'Role',
        rating: 'Rating',
        agency: 'Agency',
        not_joined: 'not joined',
        none: 'none',
        age: 'Age',
        country: 'Country',
        coordinates: 'Address',
        created: 'Joined',
        updated: 'Last update',
        agency_name: 'Agency name'
      },

      account_settings: {
        first_name: 'First name',
        last_name: 'Last name',
        email: 'E-mail',
        age: 'Age',
        save: 'Save',
        success: 'Account data updated successfully!',
        based: 'Based in',
        agency_name: 'Agency name'
      },

      account_clients: {
        sale_level: 'Client sale level',
        filter_clients: 'filter clients',
        filter_contacts: 'filter contacts',
        sale: {
          "0": 'Awareness',
          "1": 'Interest',
          "2": 'Consideration',
          "3": 'Intent',
          "4": 'Evaluation',
          "5": 'Purchase',
        },
        update: 'Update sale level',
        past: 'Past events',
        future: 'Future events',
        contract: 'Generate contract',
        download: 'Donwload pdf'
      },

      account_agency: {
        add_agents: 'Add agent',
        search_agents: 'Search for agents',
        statistics: 'Agency statistics',
        offers: 'Offers operated by agency',
        meetings: "Agent's scheduled meetings",
        messages: 'Total messages sent by agents',
        agents: 'Agents employees',
        clients: 'Clients served',
        sale: 'Sale levels sum',
        category: {
          "0": 'Agricultural',
          "1": 'Residential',
          "2": 'Commercial',
          "3": 'Industrial',
          "4": 'Raw land',
          "5": 'Special use',
        },
        offer_categories: 'Offers by category',
        raport: 'Generate raport'
      },

      offer: {
        categories: {
          COMMERCIAL: 'commercial',
          AGRICULTURAL: 'agricultural',
          RESIDENTIAL: 'residential',
          INDUSTRIAL: 'industrial',
          RAW_LAND: 'raw land',
          SPECIAL_USE: 'special use'
        },
        types: {
          RENT: 'Rent',
          DISPOSAL: 'Disposal'
        },
        related_posts: 'Blog posts related to this offer',
        no_posts: 'There are currently no blog posts related to this offer',
        ask: 'Ask about this offer in a blog post',
        about: 'About this offer',
        at: 'at',
        per_month: 'per month',
        is_negotiable: 'Price is negotiable',
        not_negotiable: 'Price is not negotiable',
        created_at: 'Offer created: ',
        category: 'Category: ',
        area: 'Area: ',
        floors: 'floor',
        rooms: 'rooms',
        room: 'room',
        is_furnished: 'This real estate is furnished',
        not_furnished: 'This real estate is not furnished',
        filters: 'Offer filters',
        agency: 'This offer is operated by',
        contact_via: 'Contact via operating agent: '
      },

      offer_filters: {
        search_title: 'Search by title',
        search_address: 'Search by address',
        price_low: 'Minimum price',
        price_high: 'Maximum price',
        area_low: 'Minimum area',
        area_high: 'Maximum area',
        category: 'Real estate category',
        type: 'Offer type',
        furnished: 'Furnished',
        negotiable: 'Negotiable price',
        floor: 'Floor',
        numberOfRooms: 'Minimum rooms'
      },

      agencies: {
        filter: 'Filter agencies',
        username: 'Username: ',
        contact: 'Contact: ',
        based_at: 'Based at: ',
        contact_via_mail: 'Contact via email',
        invited: 'User has been invited ',
        total_clients: 'Total clients: ',
        agent_sales: `Agent's sales`,
        last_log_in: 'Last log in: ',
        your_employees: 'Your employees'
      },

      contract: {
        title: 'REAL ESTATE PURCHASE AGREEMENT',
        i: 'I. The Parties.',
        part_1: 'Ths Real Estate Purchase Agreement ("Agreement") made on',
        part_2: '("Effective Date") between:',
        part_3: '("Buyer") with an address of',
        part_4: ', and contact email of',
        part_5: 'who agrees to buy',
        and: 'AND',
        part_6: '("Seller") with an address of',
        part_7: ', and contact email of',
        part_8: 'representing',
        based_at: 'based at',
        part_9: ', who agrees to sell and convey real and personal property as described in Sections II and III. Buyer and Seller shall be colectively known as the "Parties"',
        ii: 'II. Legal Descriptions.',
        part_10: 'The real property category: (check one)',
        address: 'Street Address:',
        tax: 'Tax Parcel Information:',
        other_desc: 'Other Description:',
        iii: 'III. Personal Property. ',
        part_11: 'In addition to the real property described in Section II, the Seller shall include the following personal property:',
        buyers_signature: "Buyer's signature",
        sellers_signature: "Seller's signature",
        agents_signature: "Agent's signature",
        agricultural: 'agricultural',
        residential: 'residential',
        commercial: 'commercial',
        industrial: 'industrial',
        raw_land: 'raw land',
        special_use: 'special use',
        back: 'Go back'
      },

      raport: {
        part_1: 'statistics as of',
        total_clients: 'with total clients of:',
        agents: 'Agency agent employees'
      }
    }
  },
  pl: {
    translation: {
      // ...polish translations here
    }
  }
};

export default translations;