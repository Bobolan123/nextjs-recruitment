
import { Container, Card, CardContent, Typography, Box, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const CompanySpotlight = () => {
  return (
    <Box className="bg-light-grey p-8 md:p-16 lg:p-0">
      <Container className="bg-white relative flex flex-col lg:flex-row items-center p-4">
        <Box className="absolute top-0 left-0 z-10 p-2 bg-yellow-500 text-white rounded">
          Company Spotlight
        </Box>
        <Box className="relative w-full lg:w-1/2">
          <a href="/companies/mcredit-cong-ty-tai-chinh-tnhh-mb-shinsei?track_action=Click+Branding" className="block">
            <img
              src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMHZrTXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--343901933f0c6030082fcdef2ceafe3d9bd5c9bd/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDV0FJdyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--e6f64d53dc2e90d2698b6c3e954a8523819e8019/88aea8433397eec9b786.jpg"
              alt="Mcredit - Công ty Tài chính TNHH MB Shinsei Headline Photo"
              className="w-full h-full object-cover"
            />
            <img
              src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMXlGSnc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--1f9fc35ff690ee7e6d11e0e8bdeb81305cba551b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--79eee5883893a012786006950460867831e6f661/Logo%20PNG_RGB_Digital%20use_on%20White%20BG.png"
              alt="Mcredit - Công ty Tài chính TNHH MB Shinsei Vietnam Big Logo"
              className="absolute mx-auto rounded-sm"
              style={{ bottom: '10%', left: '50%', transform: 'translateX(-50%)' }}
            />
          </a>
        </Box>
        <Box className="flex flex-col lg:flex-row items-center flex-1 w-full">
          <CardContent className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-4">
            <a href="/companies/mcredit-cong-ty-tai-chinh-tnhh-mb-shinsei?track_action=Click+Branding" className="text-it-black no-underline">
              <Typography variant="h4" className="inline">Mcredit - Công ty Tài chính TNHH MB Shinsei</Typography>
            </a>
            <Box className="flex items-center justify-center lg:justify-start mt-2">
              <LocationOnIcon className="text-dark-grey" />
              <Typography variant="body2" className="text-rich-grey ml-2">Ho Chi Minh - Ha Noi</Typography>
            </Box>
            <Typography variant="body2" className="text-rich-grey mt-2">
              Overview about Mcredit - Công ty Tài chính TNHH MB Shinsei
            </Typography>
            <Button
              href="/companies/mcredit-cong-ty-tai-chinh-tnhh-mb-shinsei?track_action=Click+Branding#our-jobs"
              className="flex items-center text-it-black mt-4"
              endIcon={<ArrowRightIcon />}
            >
              View 3 jobs
            </Button>
          </CardContent>
          <Box className="flex-1 w-full flex flex-col justify-center p-4">
            <Box className="mt-4 lg:mt-0">
              <Box className="flex items-start py-1">
                <ArrowRightIcon className="mt-1" />
                <a href="/it-jobs/cv-itsm-it-service-management-business-analyst-mcredit-cong-ty-tai-chinh-tnhh-mb-shinsei-3023?lab_feature=company_spotlight&track_action=Click+Branding" className="text-it-black ml-2">CV ITSM (IT Service Management, Business Analyst)</a>
              </Box>
              <Box className="flex items-start py-1">
                <ArrowRightIcon className="mt-1" />
                <a href="/it-jobs/chuyen-vien-pentest-soc-security-it-engineer-mcredit-cong-ty-tai-chinh-tnhh-mb-shinsei-4246?lab_feature=company_spotlight&track_action=Click+Branding" className="text-it-black ml-2">CV Pentest/ SOC (Tester, System Engineer, IT Security)</a>
              </Box>
              <Box className="flex items-start py-1">
                <ArrowRightIcon className="mt-1" />
                <a href="/it-jobs/manual-tester-sql-mysql-mcredit-cong-ty-tai-chinh-tnhh-mb-shinsei-4151?lab_feature=company_spotlight&track_action=Click+Branding" className="text-it-black ml-2">Manual Tester (SQL/ MySQL)</a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CompanySpotlight;
